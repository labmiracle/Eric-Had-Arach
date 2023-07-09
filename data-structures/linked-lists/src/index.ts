import LinkedList from "./linkedList";

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(3);
list.add(4);
list.printList();

list.remove(2);
list.printList();

list.invert();
list.printList();

list.deleteDups();
list.printList();








