[back](./index.md)
# `nx generate-types`
* this will generate .d.ts files in the /types directory at the root of this workspace
* can also run `nx affected --target=generate-types`
* make sure for every app that you want types, add a corresponding block in `project.json`

# `nx generate-storybook-docs`
* this will generate a documentation.json file (For now just on the ui library) which can be used by storybook
* you'll want to run this if you need to update the storybook after making changes to ui components