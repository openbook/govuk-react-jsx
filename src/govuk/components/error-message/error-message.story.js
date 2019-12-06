import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ErrorMessage } from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('error-message', module)

for (const [index, example] of Object.entries(
  processExampleData(examples.examples)
)) {
  stories.add(example.name, () => <ErrorMessage {...example.data} />)
}
