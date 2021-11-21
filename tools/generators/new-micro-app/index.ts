import { Tree, formatFiles, installPackagesTask, generateFiles, joinPathFragments, updateJson } from '@nrwl/devkit';

/**
 * This matches up to schema.json
 */
export interface Schema {
  name: string,
  port: number
}

export const capitalize = (string: string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

export default async function (tree: Tree, schema: Schema) {
  await updateJson(tree, 'workspace.json', (workspaceJson) => {
    workspaceJson.projects[schema.name] = `apps/${schema.name}`;
    workspaceJson.projects[`${schema.name}-e2e`] = `apps/${schema.name}-e2e`;

    return workspaceJson;
  });
  await generateFiles(tree, joinPathFragments(__dirname, './files'), 'apps', {
    nameComponent: `${capitalize(schema.name)}Component`,
    nameModule: `${capitalize(schema.name)}Module`,
    name: schema.name,
    tsconfig: 'tsconfig',
    port: schema.port
  })
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
