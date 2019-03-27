/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '../components/Button.vue'

storiesOf('Hello World', module)
  .add('with text', () => ({
    components: { Button },
    template: '<div><Button type="primary" @click="action">Primary</Button> <Button type="secondary" @click="action">Secondary</Button> <Button type="success" @click="action">Success</Button> <Button type="danger" @click="action">Danger</Button> <Button type="warning" @click="action">Warning</Button></div>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { Button },
    render() {
      return <Button onClick={this.action}>With JSX</Button>;
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { Button },
    template: '<Button @click="action">This may be with some emoji</Button>',
    methods: { action: action('clicked') }
  }))
