#include <bits/stdc++.h>
#include <cinttypes>

using namespace std;

class Node {
    public:
        int data;
        Node* xorAddr;

};

Node* XOR (Node *prev, Node *next) { 
    return (Node *)((uintptr_t)(prev) ^ (uintptr_t)(next));
}

void add(Node **head, int element) {
    Node *newNode = new Node();
    newNode->data = element;
    newNode->xorAddr = *head;

    if (*head != nullptr) {
        (*head)->xorAddr = XOR(newNode, (*head)->xorAddr);
    }

    *head = newNode;
}

Node* get(Node *head, int index) {
    if (index < 0) {
        return nullptr;
    }

    Node *curr = head;
    Node *prev = nullptr;
    Node *next;
    int i = 0;

    while (curr != nullptr) {
        next = XOR(prev, curr->xorAddr);
        prev = curr;
        curr = next;
        i++;
    }

    int count = i - 1;
    i = 0;

    next = curr;
    curr = prev;

    while (curr != nullptr) {
        if (i == index) {
            return curr;
        }

        prev = XOR(next, curr->xorAddr);
        next = curr;
        curr = prev;

        i++;
    }

    return nullptr;
}

int main() {
    Node *head = nullptr;

    add(&head, 1);
    add(&head, 2);
    add(&head, 3);
    add(&head, 4);
    add(&head, 5);
    
    cout<<" "<<get(head, 0)->data<<"\n";
    cout<<" "<<get(head, 1)->data<<"\n";
    cout<<" "<<get(head, 2)->data<<"\n";
    cout<<" "<<get(head, 3)->data<<"\n";
    cout<<" "<<get(head, 4)->data<<"\n";

    return (0);
}
