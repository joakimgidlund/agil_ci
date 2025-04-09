import assert from "assert"
import { toRobber, toAllsprak, toNormal } from "./../src/translators.js"

describe("Translators", function () {
    describe("#toRobber", function () {
        it("should work for empty string", function () {
            assert.strictEqual(toRobber(""), "")
        })
        it("should work for simple input", function () {
            assert.strictEqual(toRobber("Hejsan hoppsan!"), "Hohejojsosanon hohopoppopsosanon!")
        })
    })
    describe("#toAllsprak", function () {
        it("should work for empty string", function () {
            assert.strictEqual(toAllsprak(""), "")
        })
        it("should work for simple input", function () {
            assert.strictEqual(toAllsprak("Hejsan hoppsan!"), "Hallejsan halloppsan!")
        })
    })
    describe("#toNormal", function () {
        it("should work for empty string", function () {
            assert.strictEqual(toNormal(""), "")
        })
        it("should work for regular input", function () {
            const input = "Hejsan hoppsan!"
            assert.strictEqual(toNormal(input), input)
        })
        it("should work for robber language", function () {
            const input = "Hejsan hoppsan!"
            assert.strictEqual(toNormal(toRobber(input)), input)
        })
    })
})
