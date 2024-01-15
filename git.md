# Git

---

## Theory

- Working Directory: Current project folder
- Repository
  - Commit: code snapshot
  - Branch: where commits are stored

---

## Code

- config user account
  `git config --global user.name`
  `git config --global user.email`
- edit user account
  `git config --global user.name <user_name>`
  `git config --global user.email <user_email>`
- make alias `git config alias.<alias_name> <make your code combination>`
  ex `git config alias.history "log --oneline --all --graph"`
  -> `git history` = `git log --oneline --all --graph`

<Br>

1. initialize `git init`
2. information about current branch `git status`
3. adding staging area `git add <file_name>`
   - adding all `git add .`
4. make a snapshot `git commit -m <commit message>`

<Br>

## Branch

1. change branch name `git branch -m <name>`
2. make branch `git checkout -b <branch name>`

<Br>

## Merge

1. in main branch, merge a branch `git merge <branch name>`
   - conflict: solve conflict and git add & git commit again