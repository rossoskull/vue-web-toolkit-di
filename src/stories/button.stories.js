/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs } from '@storybook/addon-knobs';

import Button from '../components/Button.vue'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('Esempi', () => ({
    components: { Button },
    template: `
      <div>
        <div className="mb-2">
            <Button color='primary' className="mr-1">
                Primary
            </Button>
            <Button outline color='primary' className="mr-1">
                Primary Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='secondary' className="mr-1">
                Secondary
            </Button>
            <Button outline color='secondary' className="mr-1">
                Secondary Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='tertiary' className="mr-1">
                Tertiary
            </Button>
            <Button outline color='tertiary' className="mr-1">
                Tertiary Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='quaternary' className="mr-1">
                Quaternary
            </Button>
            <Button outline color='quaternary' className="mr-1">
                Quaternary Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='success' className="mr-1">
                Success
            </Button>
            <Button outline color='success' className="mr-1">
                Success Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='info' className="mr-1">
                Info
            </Button>
            <Button outline color='info' className="mr-1">
                Info Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='danger' className="mr-1">
                Danger
            </Button>
            <Button outline color='danger' className="mr-1">
                Danger Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='warning' className="mr-1">
                Warning
            </Button>
            <Button outline color='warning' className="mr-1">
                Warning Outline
            </Button>
        </div>
        <div className="mb-2">
            <Button color='link' className="mr-1">
                Link
            </Button>
            <Button outline color='link' className="mr-1">
                Link Outline
            </Button>
        </div>
                
      </div>
    `,
    methods: { action: action('clicked') }
  }))


stories.add('with JSX', () => ({
    components: { Button },
    render() {
      return <Button onClick={this.action}>With JSX</Button>;
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))