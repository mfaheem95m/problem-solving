class Node {
    constructor(data) {
        this.data = data;  // Value of the node
        this.next = null;  // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;

        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteAtBeginning() {
        this.head = this.head.next;
    }
    deleteAtEnd() {
        let current = this.head;
        let prev;
        while (current.next !== null) {
            prev = current;
            current = current.next;

        }
        prev.next = null
    }
    findLast() {

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;

    }


}

const list = new LinkedList();
list.insertAtEnd(50)
list.insertAtEnd(110)
list.insertAtEnd(90)
list.insertAtEnd(80)
// list.insertAtEnd(50)
// list.deleteAtEnd()

console.log(list);