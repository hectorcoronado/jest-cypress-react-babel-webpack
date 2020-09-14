import React from 'react'
import CalculatorDisplay from '../calculator-display'
import {render} from 'calculator-test-utils'
import {light} from '../../themes'

test('renders ', () => {
  const {container} = render(<CalculatorDisplay value="0" />, {theme: light})
  // console.log(container.innerHTML)

  // jest has the ability to serialize an entire DOM node!
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: #1c191c;
      background: white;
    }

    <div>
      <div
        class="emotion-0 emotion-1"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    </div>
  `)
})
