import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PageTitleComponent } from './page-title.component';

export default {
  title: 'PageTitleComponent',
  component: PageTitleComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PageTitleComponent>;

const Template: Story<PageTitleComponent> = (args: PageTitleComponent) => ({
  component: PageTitleComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    text:  '',
}