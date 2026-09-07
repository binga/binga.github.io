#!/usr/bin/env ruby
#
# Check for meaningful changes to posts. Taxonomy-only edits should not make an
# old article appear in the "Recently Updated" list.

require 'open3'

def normalized_post_content(content)
  content.sub(/\A---\s*\n(.*?)\n---\s*\n/m) do
    front_matter = Regexp.last_match(1)
    front_matter = front_matter.lines.reject do |line|
      line.match?(/\A(?:categories|tags):/)
    end.join

    "---\n#{front_matter}---\n"
  end
end

def git_output(*args)
  output, status = Open3.capture2('git', *args)
  status.success? ? output : nil
end

Jekyll::Hooks.register :posts, :post_init do |post|
  path = post.relative_path.sub(%r{\A/}, '')
  history = git_output('log', '--format=%H', '--', path)
  next unless history

  commits = history.lines.map(&:strip)
  next if commits.length < 2

  meaningful_commit = commits.each_cons(2).find do |current_commit, previous_commit|
    current = git_output('show', "#{current_commit}:#{path}")
    previous = git_output('show', "#{previous_commit}:#{path}")

    current && previous && normalized_post_content(current) != normalized_post_content(previous)
  end&.first

  next unless meaningful_commit

  lastmod_date = git_output('show', '-s', '--format=%aI', meaningful_commit)
  post.data['last_modified_at'] = lastmod_date.strip if lastmod_date
end
