/**
 * Git Learning................
 *
 * Basic GitBash command.
 * --------------------------------------------------------------------
 * cd
 * cd Desktop
 * mkdir folderName
 * mkdir -p folderName1/folderName2
 * touch file1.js file2.js
 *
 * rm fileName
 * rm -r folderName
 *
 *
 *
 * Git Configaration.
 * --------------------------------------------------------------------
 * git config --global --list
 * git config --global user.name "Jahid Hasan"
 * git config --global user.email "gsvmch777@gmail.com"
 * git config --global color.ui "auto"
 *
 * # SSH key generate.
 * ssh-keygen -o -t rsa -C "gsvmch777@gmail.com"
 *
 * # SSH Core command.
 * git config --global core.sshcommand "ssh -i ~/.ssh/id_rsa"
 *
 *
 *
 * Git Remote Access with push and pull.
 * ------------------------------------------------------------------
 * git remote -v
 * git remote add origin (url: www.example.com)
 * git remote add vercel (url: www.example.com)
 *
 * git push origin main
 * git pull
 * git push -u origin main
 *
 *
 *
 * Git Basic.
 * -----------------------------------------------------------------
 * git init
 * git clone (url:www.example.com)
 * git status
 * git add fileName
 * git add .
 * git add --all
 *
 * git commit -m "add comments here"
 *
 *
 *
 * GitIgnore file
 * -----------------------------------------------------------------
 * touch .gitignore
 * vi .gitignore
 * _nodemodules
 * .env
 * :wq
 *
 * git rm --cached fileName
 *
 *
 *
 *
 * Git Branch
 * -----------------------------------------------------------------
 * git branch
 * git branch branchName
 * git switch branchName
 *
 *
 * git checkout -b branchName
 *
 * git branch -d branchName
 * git branch -m main
 *
 * git merge branchName
 *
 *
 *
 * Git Stash.
 * -----------------------------------------------------------------
 * git stash
 * git stash list
 * git stash apply
 * git stash pop
 * git stash apply @stash{1}
 * git stash drop @stash{1}
 * git stash clear
 *
 *
 *
 *
 * Git Log and Reflog.
 * ------------------------------------------------------------------
 * git log
 * git log --oneline
 * git reflog --oneline
 *
 * git diff fileName
 * git rm fileName
 *
 * git reset --soft HEAD
 * git reset --hard HEAD
 *
 *
 *
 * Git Advanced
 * ------------------------------------------------------------------
 * git blame fileName
 * git clean -f
 *
 *
 */
