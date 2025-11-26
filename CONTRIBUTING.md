# Contributing to BUGATTI.index

Thank you for your interest in contributing! This document explains how to open good issues and pull requests, where to find community resources and the code of conduct, and our expectations for community behavior.

## Quick links
- Code of Conduct: Contributor Covenant — https://www.contributor-covenant.org/
- How to open issues and PRs on GitHub: https://docs.github.com/en/issues
- GitHub Discussions docs (if enabled): https://docs.github.com/en/discussions
- Reporting security issues: use the repository SECURITY.md or contact the maintainers privately (see repository contact details)

## Creating a great issue
A good issue helps maintainers reproduce and fix problems quickly.

When opening an issue, please:
1. Use a short, descriptive title.
2. Choose the most relevant issue template (bug, feature, question) if available.
3. Include a clear description of the problem or request.
4. Provide steps to reproduce (exact commands, minimal reproduction if possible).
5. Include the expected behavior and the actual behavior.
6. Provide environment details: OS, Node/Python/Go version, library versions, and branch/commit SHA if relevant.
7. Paste logs or error messages (not screenshots) and attach minimal code reproducer or a link to a sandbox.
8. Mark the priority if helpful (low/medium/high) and whether you can help with a fix.

Example bug report template (use when creating an issue):
- Title: "Crash when exporting large index on macOS"
- Description: Short description
- Steps to reproduce:
  1. ...
  2. ...
- Expected behavior: ...
- Actual behavior: ...
- Environment: OS, version, commit, etc.
- Attachments: logs, stack traces, minimal repro

## Creating a useful pull request
A good pull request makes reviewing and merging easy.

Before opening a PR:
- Search existing issues and PRs to avoid duplicates.
- Open an issue first for non-trivial features or design changes and discuss approach.
- Keep changes focused and small when possible.
- Rebase or merge the latest main branch and make sure the PR branch passes CI.

PR checklist (add to the PR description):
- Summary of changes (1–2 sentences)
- Related issue number(s) (e.g., fixes #123)
- Type of change: bug fix / new feature / docs / refactor
- How to test: steps to exercise the change
- Checklist:
  - [ ] I added/updated tests (if applicable)
  - [ ] I updated documentation (if applicable)
  - [ ] CI is passing
  - [ ] I followed the coding style and linting rules

Example PR template:
- Title: "Fix crash in exporter for large indices"
- Body:
  - Summary
  - Related issues
  - Testing instructions
  - Checklist

## Links to external docs & communication channels
- Contributor Covenant (code of conduct): https://www.contributor-covenant.org/
- GitHub Issues guide: https://docs.github.com/en/issues
- GitHub Pull Requests guide: https://docs.github.com/en/pull-requests
- GitHub Discussions (for general Q&A): https://docs.github.com/en/discussions

If you want mailing list-style communication, consider using GitHub Discussions or a short community mailing list; include setup instructions here (or add a link) once created.

## Security policy
Do not disclose security vulnerabilities in a public issue. If you discover a security issue:
1. Check for a SECURITY.md file in this repo and follow it.
2. If none, contact maintainers privately (use the repository's listed maintainer contact) or use GitHub's security advisories.

## Community & behavioral expectations
We want the project to be welcoming and productive:
- Be respectful and assume good intent.
- Be inclusive: avoid discriminatory or harassing language or behavior.
- Be constructive in reviews: suggest improvements, explain reasoning, and cite references when possible.
- Keep discussions on-topic and relevant to the repository.
- Follow the Code of Conduct. Violations may result in moderation actions.

If you witness or experience unacceptable behavior, report it to the maintainers as directed by the CODE_OF_CONDUCT.md or SECURITY.md.

## Getting help or contributing other ways
- Good first issues: label issues suitable for newcomers with "good first issue".
- Documentation: improving docs, examples, and tutorials is extremely helpful.
- Tests: adding or improving tests helps maintain code quality.
- Reviews: help triage issues and review PRs when you can.

Thank you for contributing — we look forward to your improvements!
