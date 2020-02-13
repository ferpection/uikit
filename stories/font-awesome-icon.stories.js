import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { FontAwesomeIcon } from '../src/components/index.ts'

storiesOf('Iconography|FontAwesomeIcon', module)
  .addDecorator(withA11y)
  .add('exposed component', () => (
    <>
      <h1>FontAwesomeIcon</h1>
      <p>
        <code>{FontAwesomeIcon.name}</code> is not part of UiKit. As UiKit uses it in production mode and to avoid
        loaded several version of font awesome in you application, UiKit exposes this component to your application.
      </p>
      <p>
        For help about how to use the component, please refer to{' '}
        <a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome">the documentation</a>
      </p>
      <p>For instance:</p>
      <h2>Solid</h2>
      <FontAwesomeIcon icon={['fas', 'ad']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'address-book']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'address-card']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'adjust']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'air-freshener']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'align-center']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'align-justify']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'align-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'align-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'allergies']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'ambulance']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'american-sign-language-interpreting']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'anchor']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-double-down']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-double-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-double-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-double-up']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-down']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angle-up']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'angry']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'ankh']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'apple']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'archive']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'archway']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-down']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-up']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-circle-down']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-circle-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-circle-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-circle-up']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-down']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrow-up']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrows-alt']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrows-alt-h']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'arrows-alt-v']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'assistive-listening-systems']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'asterisk']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'at']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'atlas']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'atom']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'audio-description']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'award']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'baby']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'baby-carriage']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'backspace']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'backward']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'bacon']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'bahai']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'balance-scale']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'balance-scale-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'balance-scale-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'ban']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'ban-aid']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'bars']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'baseball-ball']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'basketball-ball']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'bath']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'battery-full']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'battery-half']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'battery-quarter']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'battery-three-quarter']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'bed']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'beer']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'bell']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'bell-slash']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fas', 'times']} style={{ margin: 5 }} />
      <p>
        For more icons, please refer to the{' '}
        <a href="https://fontawesome.com/icons?d=gallery&s=solid">Solid icon gallery</a>
      </p>
      <h2>Regular</h2>
      <FontAwesomeIcon icon={['far', 'address-book']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'address-card']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'angry']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'arrow-alt-circle-down']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'arrow-alt-circle-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'arrow-alt-circle-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'arrow-alt-circle-up']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'bell']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'bell-slash']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'bookmark']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'building']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'calendar']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'calendar-alt']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'calendar-check']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'calendar-minus']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'calendar-plus']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'calendar-times']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'carret-square-down']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'carret-square-left']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'carret-square-right']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'carret-square-up']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'chart-bar']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'check-circle']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'check-square']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'circle']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'clipboard']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'clock']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'clone']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'closed-captioning']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'comment']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'comment-alt']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'comment-dots']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'compas']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'copy']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'copyright']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'credit-card']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'dizzy']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'dot-circle']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'edit']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'envelope']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'envelope-open']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'eye']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'eye-slash']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-alt']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-archive']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-audio']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-code']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-excel']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-image']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-pdf']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-powerpoint']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-video']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'file-word']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'flag']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'flushed']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'folder']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'folder-open']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'frown']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'frown-open']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'futbol']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'gem']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grimace']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-alt']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-beam']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-beam-sweat']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-heart']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-squint']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-squint-tears']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-stars']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-tears']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-tongue']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-tongue-squint']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['far', 'grin-tongue-wink']} style={{ margin: 5 }} />
      <p>
        For more icons, please refer to the{' '}
        <a href="https://fontawesome.com/icons?d=gallery&s=regular">Regular icon gallery</a>
      </p>
      <h2>Brand</h2>
      <FontAwesomeIcon icon={['fab', '500px']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'accessible-icon']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'accusoft']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'acquisitions-incorporated']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'adn']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'adobe']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'adversal']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'affiliatetheme']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'airbnb']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'algolia']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'alipay']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'amazon']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'amazon-pay']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'amilia']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'android']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'angelist']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'angrycreative']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'angular']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'app-store']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'app-store-ios']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'apper']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'apple']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'apple-pay']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'artstation']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'asymmetrik']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'atlasian']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'audible']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'autoprefixer']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'avianex']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'aviato']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'aws']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bandcamp']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'battle-net']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'behance']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'behance-square']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bimobject']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bitbucket']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bitcoin']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bity']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'black-tie']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'blackberry']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'blogger']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'blogger-b']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bluetooth']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bluetooth-b']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'bootstrap']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'btc']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'buffer']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'buromobelexperte']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'buy-n-large']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'buysellads']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'canadian-maple-leaf']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-amazon-pay']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-amex']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-apple-pay']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-diners-club']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-discover']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-jcb']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-mastercard']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-paypal']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-stripe']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cc-visa']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'centercode']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'centos']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'chrome']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'chromecast']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cloudscale']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cloudsmith']} style={{ margin: 5 }} />
      <FontAwesomeIcon icon={['fab', 'cloudversify']} style={{ margin: 5 }} />
      <p>
        For more icons, please refer to the{' '}
        <a href="https://fontawesome.com/icons?d=gallery&s=brands">Brand icon gallery</a>
      </p>
    </>
  ))
