# Git

DOCS https://git-scm.com/book/ko/v2

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
- delete github personal token
  1. `git credential-osxkeychain erase` -> `enter`
  2. `host=github.com` -> `enter`
  3. `protocol=https` -> `enter` twice

<Br>

1. initialize `git init`
2. information about current branch `git status`
3. adding files on staging area `git add <file_name>`
   - adding all `git add .`
4. make a snapshot `git commit -m <commit message>`
5. connecting repository to local `git remote add origin <repository URL>`
   - `origin` means `<repository URL>` and origin is like a convention, possible to change but not recommend
6. send local data to repository `git push -u origin main`
7. send repository data to local `git pull`
8. reset commit `git reset`
   - hard reset (delete recent `number` commit) `git reset --hard HEAD~<number>`
9. back to recently commit
   - delete unstaged changes `git checkout -- .` or `git checkout -- <file name>`
   - delete staged changes (after add) `git reset <file name>`
10. clone repository (make repository folder) `git clone <repository URL>`
    - clone in current folder `git clone <repository URL> .`

<Br>

## Branch

- make branch `git checkout -b <branch name>`
- change branch name `git branch -m <name>`
- delete branch `git branch -D <branch name>`

<Br>

## Merge

- in main branch, merge a branch `git merge <branch name>`
  - conflict: solve conflict and git add & git commit again
