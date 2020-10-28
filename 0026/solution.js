class LinkedList
{
    constructor(head)
    {
        this.head = head;
    }

    remove(index)
    {
        if (index === 0) {
            this.head = this.head.next;
            
            return ;
        }

        let i = 1;
        let node = this.head;
        while (i < index) {
            node = node.next;
            i++;
        }

        node.next = node.next.next;
    }
}

class Node
{
    constructor(val, next)
    {
        this.val = val;
        this.next = !!next ? next : null;
    }
}

module.exports = {
    LinkedList,
    Node,
};