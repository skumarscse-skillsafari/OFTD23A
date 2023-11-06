# Functions are building block of the program
# It is used to split the huge application into smaller blocks
# It is also used to create reusable codes

# Function Declaration
# Function Calling

# Syntax
# Function declaration
# def functionName(parameter-1, parameter-2, ..., parameter-N):
#           // function block

# Syntax
# Function calling
# functionName(argument-1, argument-2,..., argument-N)

# print("Above function")


# Addition of 2 numbers
# def add(a, b):
#     # a = 2, b = 3
#     print("Inside function")
#     print(a + b)


# # print("Below function")
# add(int(input("Enter number-1: ")), int(input("Enter number-2: ")))


# def greeting(name):
#     print(f"Hello, {name}")


# greeting("John")
# greeting("Jack")
# greeting("Mary")


# def addition(numOne, numTwo, *args):
#     result = numOne + numTwo
#     for i in args:
#         result = result + i
#     print(result)


# addition(2, 3, 4, 5, 6)


# def message():
#     print("Hello")


# message()

# return in function


def addition(numOne, numTwo, *args):
    result = numOne + numTwo
    # return "Hello"
    for i in args:
        result = result + i
    return result


# result = addition(2, 3, 4, 5, 6)
# print(result)

print(addition(2, 3, 4, 5, 6))
