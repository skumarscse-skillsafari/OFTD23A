# Data Types in Python
# Numeric - Integer, Float, Complex
# Boolean
# Dictionary
# Set
# Sequence data - String, List, Tuple

# Numeric
# Integer - whole numbers between 0 and 9
# Ex: 123, 1989
# age = 23
# print(age)
# print(type(age))

# Float - numbers with decimal values
# Ex: 12.3, 45.6
# ageInYears = 18.5
# print(ageInYears)
# print(type(ageInYears))

# Complex - complex numbers with real and imaginary part
# Ex: 2 + 3j
# complexNumber = 2 + 3j
# print(complexNumber)
# print(type(complexNumber))

# Boolean - True or False
# isAdmin = True
# print(isAdmin)
# print(type(isAdmin))

# String - Sequence of alphabets or alphanumeric characters
# Should be enclosed inside double or single or triple quote
# strOne = "Hello World"
# strTwo = "Hello123"
# print(strOne)
# print(strTwo)
# print(type(strOne))
# print(type(strTwo))

# strThree = "I'm happy"
# print(strThree)
# print(type(strThree))

# Multi-line strings
# strFour = """Hello, John
# Welcome to SkillSafari
# Coimbatore"""
# print(strFour)
# print(type(strFour))

# Accessing string characters
# index
# Ex: SkillSafari
#     012345678910

# Hello
# H-e-l-l-o
# 0-1-2-3-4
# left to right => index starts with "0"
# right to left => index starts with "-1"
# Ex: H  e  l  l  o
#    -5 -4 -3 -2 -1
strFive = "Hello"
# print(strFive)
# print(len(strFive))
# print(len("Hello World"))
# print(strFive[-1])
# print(strFive[len(strFive) - 1])
# Syntax
# str[index]
# print(strFive[1])
# print(strFive[-4])
# strSix = "SkillSafari EduKeys"
# print(strFive.capitalize())
# print(strFive.upper())
# print(strFive.lower())
# print(strFive.find("e"))
# print(strFive.find("l"))
# print(strFive.find("m"))

# find("substring")
# print(strSix.find("kill"))
# print(strSix.find("Edu"))
# print(strSix.find("Keys"))
# print(strSix.find("keys"))

# List
# Used to store data in ordered format starts with index "0"
# List can store any type of data
# Syntax
# [val-1, val-2,..., val-N]
# numbers = [1, 2, 3, 4, 5]
# print(numbers)
# alphaList = ["a", "b", "c", "Hello", "World"]
# print(alphaList)
# alphaNumeric = [1, 2, 3, "a", "b", "Hello"]
# print(alphaNumeric)

# print(type(numbers))
# print(type(alphaList))
# print(type(alphaNumeric))

# Accessing list items or elements
# Ex: ["a", "b", "c"]
#       0    1    2
# Syntax
# varName[index]
# print(numbers[1])
# print(alphaList[3])

# Modifying list elements
# Syntax
# varName[index] = "newValue"
# alphaList[3] = "John"
# print(alphaList)

# Tuple
# Similar like list and immutable
# Syntax
# (val-1, val-2,..., val-N)
# numbersTuple = (1, 2, 3, 4, 5)
# print(numbersTuple)
# print(type(numbersTuple))
# print(numbersTuple[4])

# numbersTuple[4] = 6
# print(numbersTuple)

# alphaNumericTuple = (1, 2, 3, "a", "b", "Hello", "welcome123")
# print(alphaNumericTuple)

# Dictionary
# Stores data in key : value pair
# Syntax
# varName = {
#  "key-1": value-1,
#  "key-2": value-2,
#  "key-N": value-N
# }

# userDetails = {
#     "firstName": "John",
#     "lastName": "Jack",
#     "age": 23,
#     "isAdmin": True,
#     "hobbies": ["cricket", "newspaper", "football"],
# }
# print(userDetails)
# print(type(userDetails))

# # Accessing values
# # varName["key"]
# print(userDetails["hobbies"])
# print(userDetails["firstName"])
# print("Full name: " + userDetails["firstName"] + " " + userDetails["lastName"])

# Set
# Syntax
# {val-1, val-2,..., val-N}
# listNumbers = {1, 2, 3, 4, 5, 1, 2, 3}
# print(listNumbers)
