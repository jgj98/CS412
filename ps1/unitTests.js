const {reverse} = require ('./P1');
const {math} = require ('./P2');
const {getLambda} = require('./P3')

const{describe,it} = require('mocha');
const{expect} = require('chai');

describe('P1 Tests', () => {
    it('Should return zywvqba when passed abzywqv',() => {
        let answer = reverse('abzywqv');
        expect(answer).to.be.equal('zywvqba');
    });
    it('Should return xuutsssrrppoollliiiiiiigfeedcccaaa when passed supercalifragilisticexpialidocious',() => {
        let answer = reverse('supercalifragilisticexpialidocious');
        expect(answer).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
    });

})

describe('P2 Tests', () => {
    it('Should return 10 when passed 5+5',() => {
        let answer = math('5+5')();
        expect(answer).to.be.equal(10);
    });
    it('Should return 8 when passed 5+3',() => {
        let answer = math('5+3')();
        expect(answer).to.be.equal(8);
    });
    it('Should return 3 when passed 8-5',() => {
        let answer = math('5+5')();
        expect(answer).to.be.equal(10);
    });
    it('Should return 1 when passed 9-8',() => {
        let answer = math('9-8')();
        expect(answer).to.be.equal(1);
    });
    it('Should return 25 when passed 5*5',() => {
        let answer = math('5*5')();
        expect(answer).to.be.equal(25);
    });
    it('Should return 1 when passed 2*8',() => {
        let answer = math('2*8')();
        expect(answer).to.be.equal(16);
    });
    it('Should return 4 when passed 8/2',() => {
        let answer = math('5*5')();
        expect(answer).to.be.equal(25);
    });
    it('Should return 3 when passed 9/3',() => {
        let answer = math('9/3')();
        expect(answer).to.be.equal(3);
    });
    it('Should return 125 when passed 5^3',() => {
        let answer = math('5^3')();
        expect(answer).to.be.equal(125);
    });
    it('Should return 81 when passed 3^3',() => {
        let answer = math('3^4')();
        expect(answer).to.be.equal(81);
    });
    it('Should return 2 when passed 8%3',() => {
        let answer = math('8%3')();
        expect(answer).to.be.equal(2);
    });
    it('Should return 1 when passed 5%4',() => {
        let answer = math('5%4')();
        expect(answer).to.be.equal(1);
    });
})

describe('P3 Tests', () => {
    it("Should return [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’] when passed (a),(supercalifragilisticexpialidocious)",() => {
        let answer = getLambda('a')("supercalifragilisticexpialidocious");
        let result = ["super", "califragilisti", "cexpialido", "cious"];
        expect(answer).to.eql(result);
    });
    it("Should return [ super, canines, cans, crush, cats ] when passed (a),(supercaninescancrushcats)",() => {
        let answer = getLambda('a')("supercaninescancrushcats");
        let result = [ 'super', 'canines', 'can', 'crush', 'cats' ];
        expect(answer).to.eql(result);
    });
    it("Should return {" +
        "originalString: 'supercalifragilisticexpialidocious'," +
        "modifiedString: 'supercAlifrAgilisticexpiAlidocious', " +
        "numberReplaced: 3," +
        "length: 34}   when passed (b),(supercalifragilisticexpialidocious)",() => {
        let answer = getLambda('b')("supercalifragilisticexpialidocious");
        let result = {
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced: 3,
            length: 34
        };
        expect(answer).to.eql(result);
    });
    it("Should return {" +
        "originalString: 'supercaninescanscrushcats'," +
        "modifiedString: 'supercAninescAnscrushcAts', " +
        "numberReplaced: 3," +
        "length: 25}   when passed (b),(supercaninescanscrushcats)",() => {
        let answer = getLambda('b')("supercaninescanscrushcats");
        let result = {
            originalString: 'supercaninescanscrushcats',
            modifiedString: 'supercAninescAnscrushcAts',
            numberReplaced: 3,
            length: 25
        };
        expect(answer).to.eql(result);
    });


})