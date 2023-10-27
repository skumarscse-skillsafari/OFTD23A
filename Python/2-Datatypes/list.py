# Creating a list
# students = ["John", "Jack", "Prince", "Robert", "Mary"]
# print(students)

# Accessing list elements
# varName[index]
# left to right => starts with "0"
# right to left => starts with "-1"
# Prince
# print(students[2])
# print(students[-4])
# varName[startIndex: endIndex]
# print(students[1:3])
# varName[:endIndex]
# print(students[:4])
# varName[startIndex:]
# print(students[2:])

# Adding elements to list - append(), insert(), extend()
# students.append("Raam")
# print(students)
# students.insert(2, "Raaj")
# print(students)

# listOne = [1, 2, 3]
# listTwo = [4, 5, 6]
# print(listOne)
# listOne.extend(listTwo)
# print(listOne)

# Modifying list item - "=" and ":"
# Syntax
# varName[index] = newValue
# varName[startIndex:endIndex] = val-1, val-2...
# print(students)
# students[2] = "Manoj"
# print(students)

# students[2:4] = "Abi", "Prasanth"
# print(students)

# Removing an element - remove(), del, pop()
# print(students)
# students.remove("Robert")
# print(students)

# del students[3]
# print(students)

# print(students)
# pop() / pop(index)
# students.pop()
# students.pop(3)
# print(students)

# Finding the length - len()
# print(len(students))

# Sorting - sort(), sort(reverse = True), sorted()
# print(students)
# students.sort()
# students.sort(reverse=True)
# print(students)
# print(students.sort())
# newSortedList = sorted(students)
# print(sorted(students, reverse=True))
# print(newSortedList)

# Reverse a list - reverse()
# print(students)
# students.reverse()
# print(students)

# Iteration - for in
# Syntax
# for varName in list:
#       print(varName)
# print(students)
# for student in students:
#     print(student)

# copy
# originalFruits = ["apple", "orange", "mango", "banana"]
# cloneFruits = []
# for fruit in originalFruits:
#     cloneFruits.append(fruit)
# print(cloneFruits)

# Existance check - "in"
# print("Mary" in students)
# print("Abi" in students)

# Slice - ":"
# print(students)
# print(students[2:5])

# Count - count()
# fruitList = ["apple", "orange", "mango", "apple", "banana"]
# print(fruitList.count("apple"))

# Clearing a list - clear()
# numList = [1, 2, 3, 4, 5]
# print(numList)
# numList.clear()
# print(numList)

# Copying a list - copy()
# originalList = [1, 2, 3, 4]
# cloneList = []
# cloneList = originalList.copy()
# print(cloneList)
