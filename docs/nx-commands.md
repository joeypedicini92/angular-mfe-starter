[back](./index.md)
# `nx workspace-generator new-micro-app --name "<APP NAME>" --port <APP PORT>`
* this will create all the files necessary to get an up and running micro app created
* this uses the code inside of `tools/generators/new-micro-app`
* if we make any config changes to any project that we want to be made for all future projects, we need to make sure to add the change in those template files

# `nx generate-types`
* this will generate .d.ts files in the /types directory at the root of this workspace
* can also run `nx affected --target=generate-types`
* make sure for every app that you want types, add a corresponding block in `project.json`

# `nx generate-storybook-docs`
* this will generate a documentation.json file (For now just on the ui library) which can be used by storybook
* you'll want to run this if you need to update the storybook after making changes to ui components