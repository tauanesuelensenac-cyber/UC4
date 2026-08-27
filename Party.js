"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    name;
    members;
    constructor(name, members = []) {
        this.name = name;
        this.members = [];
    }
    getName() {
        return this.name;
    }
    getMembers() {
        return this.members;
    }
    setName(name) {
        this.name = name;
    }
    setMembers(members) {
        this.members = members;
    }
    addMember(character) {
        this.members.push(character);
    }
    removeMember(character) {
        this.members = this.members.filter(member => member !== character);
    }
    showMembers() {
        console.log(`========================
           ${this.name.toUpperCase()}
            ========================`);
        for (let i = 0; i < this.members.length; i++) {
            let member = this.members[i];
            console.log(`${i + 1}. ${member.getName()} - Level ${member.getLevel()}`);
        }
    }
}
exports.Party = Party;
