#!/usr/bin/env python3
"""
Fix blog-posts.ts by removing duplicate description fields
"""
import re

# Read the file
with open(r'c:\Users\rossd\Hampstead On-Demand\src\content\blog\blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Split into individual posts
posts = content.split('  {')

fixed_posts = []
for i, post in enumerate(posts):
    if i == 0:
        # Header content
        fixed_posts.append(post)
        continue

    lines = post.split('\n')
    seen_description = False
    fixed_lines = []

    for line in lines:
        # Check if this is a description line
        if 'description:' in line and not line.strip().startswith('//'):
            if seen_description:
                # Skip duplicate description
                continue
            seen_description = True
        fixed_lines.append(line)

    fixed_posts.append('\n'.join(fixed_lines))

# Rejoin
result = '  {'.join(fixed_posts)

# Write back
with open(r'c:\Users\rossd\Hampstead On-Demand\src\content\blog\blog-posts.ts', 'w', encoding='utf-8') as f:
    f.write(result)

print("Fixed duplicate description fields!")
