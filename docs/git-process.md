[back](./index.md)
# Husky
We are using husky to manage git hooks. You can take a look in there for the implementations.

## Commit Messages
`<JIRA Project>-<number>: <message>`
### example: 
`BUF-11: add another button`

Alternatively, if you aren't finished you can tag any commit as:
`WIP ...`

## Pre-commit
We are generating type definitions on every commit. If you want you can copy-paste the /types directory into whatever repo you need to reference the micro apps.