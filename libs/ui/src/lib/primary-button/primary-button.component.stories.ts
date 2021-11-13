import { UiModule } from '@starter-microapps/ui';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PrimaryButtonComponent } from './primary-button.component';

export default {
  title: 'PrimaryButtonComponent',
  component: PrimaryButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    })
  ],
} as Meta<PrimaryButtonComponent>;

const Template: Story<PrimaryButtonComponent> = (args: PrimaryButtonComponent) => ({
  component: PrimaryButtonComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    loading:  false,
    disabled:  false,
}