# Loops
# Used to execute a statement or set of statements in repeat untill the given condition
# fails
# initialization
# Condition
# Increment/Decrement

# Syntax
# initialization
# while condition:
#   // while statement(s)
#   // increment/decrement

# print(1)
# print(2)
# print(3)
# print(4)
# print(5)
# print(6)
# print(7)
# print(8)
# print(9)
# print(10)

# Initialization
# num = 1
# # Condition
# while num <= 10:  # 11 <= 10
#     print(num)  # 1 2 3 4 5 6 7 8 9 10
#     # Increment
# num = num + 1  # num = 10 + 1 => 11
# num += 1

# Print "n" number of "Even" numbers
# start = int(input("Enter start value: "))
# end = int(input("Enter end value: "))
# while start <= end:
#     if start % 2 == 0:
#         print(start)
#     start = start + 1

# num = 10
# # Condition
# while num >= 1:  # 0 >= 1
#     print(num)  # 10 9 8 7 6 5 4 3 2 1
#     # Increment
#     # num = num - 1  # 1 - 1 => 0
#     num -= 1

# ["John", "Jack", "Mary", "Robert", "Prince"]
# name = ["John", "Jack", "Mary", "Robert", "Prince"]
# ["John", "Jack"]
# Print the names startsWith "J"
# index = 0
# mathchedNames = []
# while index < len(name):  # 5 < 5
#     if name[index].startswith("M"):
#         mathchedNames.append(name[index])
#     index += 1
# print(mathchedNames)

# num = 1
# while num <= 10:
#     if num == 5:
#         break
#     print(num)
#     num = num + 1

# num = 1
# while num <= 10:
#     if num == 5:
#         continue
#     print(num)
#     num = num + 1
