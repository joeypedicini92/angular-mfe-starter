import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FormTitleTextComponent } from './form-title-text.component';

export default {
  title: 'FormTitleTextComponent',
  component: FormTitleTextComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FormTitleTextComponent>;

const Template: Story<FormTitleTextComponent> = (args: FormTitleTextComponent) => ({
  component: FormTitleTextComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    text:  '',
}