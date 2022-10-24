import {Group} from "./Group";

export class GroupManager {
    static groups: Group[] = [];

    static showAllGroups(): void {
        this.groups.forEach(group=>{
            console.log(`Đây là lớp ${group.nameOfGroup}`);
            console.table(group.stuOfGroup);
            console.log();
        })
    }

    static showOneGr(nameOfGr: string): void {
        let index = this.findGroup(nameOfGr);
        console.log(`Đây là lớp ${GroupManager.groups[index].nameOfGroup}`);
        console.table(GroupManager.groups[index].stuOfGroup);
    }

    static addGroup(nameOfGr: string): void {
        this.groups.forEach(group=>{
            if (group.nameOfGroup === nameOfGr) {
                throw new Error('Đã có lớp này rôi');
            }
        })
        let group = new Group(nameOfGr);
        this.groups.push(group);
    }

    static findGroup(nameOfGr: string): number {
        let pos = -1;
        this.groups.forEach((group, index)=>{
            if (group.nameOfGroup === nameOfGr) {
                pos = index;
            }
            }
        )
        return pos;
    }

    static deleteGroup(nameOfGr: string): void {
        let deleteGr = this.findGroup(nameOfGr);
        if (deleteGr !== -1) this.groups.splice(deleteGr, 1);
        else throw new Error('Không tìm thấy lớp nào');
    }

    static editGroupName(nameBefore: string, nameAfter: string): void {
        let editGrName = this.findGroup(nameBefore);
        if (editGrName !== -1) {
            let group = this.groups[editGrName];
            group.setGroupName(nameAfter);
            group.stuOfGroup.forEach(stu=>{
                stu.setGroup(nameAfter);
            })
        }
        else throw new Error('Không tìm thây lớp nào');
    }
}