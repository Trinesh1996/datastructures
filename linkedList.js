var MyLinkedList = {}


class Node
{
    constructor(data, next = null)
    {
        this.data = data
        this.next = next
    }
}

MyLinkedList.init = function init()
{
    this.head = null
    this.size = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
*/

MyLinkedList.init.prototype.get = function(index)
{
    var current
    var count = 0

    if (index > this.size || index < 0)
    {
        return -1
    }
    else
    {
        current = this.head
        while(current)
        {
            if (count == index)
            {
                return current.data
            }
            count ++
            current = current.next
        }
        return null
    }
};

MyLinkedList.init.prototype.getNodes = function()
{
    let current = this.head
    console.log(JSON.stringify(current))
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
*/

MyLinkedList.init.prototype.addAtHead = function addAtHead(val)
{
    if (val)
    {
        this.head = new Node(val, this.head)
        this.size ++
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
*/

MyLinkedList.init.prototype.addAtTail = function(val)
{
    if (this.size == 0)
    {
        return false
    }
    else
    {
        var node = new Node(val)
        var current
        if (!this.head)
        {
            this.head = node
        }
        else
        {
            current = this.head
            while (current.next)
            {
              current = current.next
            }

            if (current.next == null)
            {
                current.next = node
            }
        }
        this.size++
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
*/

MyLinkedList.init.prototype.addAtIndex = function(index, val)
{
    var node = new Node (val)
    var current

    if (this.head == null)
    {
        this.head = node
    }
    else
    {
        if (index < 0 || index > this.size)
        {
            console.log(false)
            return false
        }
        else
        {
            var current
            var previos
            var count = 0

            if (index == 0)
            {
                this.addAtHead(val)
            }

            if (index == this.size)
            {
                this.addAtTail(val)
            }
            current = this.head
            while (count < index)
            {
                previos = current
                count ++
                current = current.next
            }
            previos.next = node
            node.next = current
            this.size ++
        }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
*/

MyLinkedList.init.prototype.deleteAtIndex = function(index)
{
    if (index < 0 || index > this.size)
    {
        return -1
    }
    else
    {
        var current
        var previos
        var count = 0
        current = this.head

        if (index == 0)
        {
            this.head = current.next
        }

        while (count < index)
        {
            count ++
            previos = current
            current = current.next
        }

        previos.next = current.next
    }

    this.size --
};

var linked = new MyLinkedList.init()

linked.addAtHead(1)

linked.addAtTail(2)
linked.addAtTail(3)
linked.addAtTail(4)
// linked.deleteAtIndex(1)


linked.getNodes()