import {
  init,
  $navlinks,
  getHash,
  updateHash,
} from '../src/main.js'

import chai from 'chai'
chai.should()

// Utility functions
const shouldBeElement = val => val.should.be.instanceof(Element)
const isArrayLike = item =>
  (
    Array.isArray(item) ||
    (Boolean(item) &&
    typeof item === 'object' &&
    typeof (item.length) === 'number' &&
    (item.length === 0 ||
      (item.length > 0 &&
        (item.length - 1) in item)
      )
    )
  )
const toArray = arrayLike => Array.prototype.slice.call(arrayLike)

describe('test suite', () => {
  it('works', () => {
    'Test suite is working'.should.equals('Test suite is working')
  })
  it('can access browser\'s code', () => {
    init.should.be.a('function')
  })
})
describe('$navlinks', () => {
  it('is a NodeList of elements', () => {
    isArrayLike($navlinks).should.be.ok
    $navlinks.should.be.instanceof(NodeList)
    toArray($navlinks).every(shouldBeElement)
  })
})
describe('getHash', () => {
  it('gets the hash from an url', () => {
    getHash('http://example.com/#thehash')
        .should.equals('thehash')
  })
  it('works for relatives urls', () => {
    getHash('img/image.png#otherhash')
        .should.equals('otherhash')
  })
})
describe('updateHash', () => {
  it('updates the hash on the url', () => {
    updateHash('newhash')
    window.location.hash.should.equals('#newhash')
  })
  it('can remove the hash', () => {
    updateHash('')
    window.location.hash.should.equals('')
  })
})
