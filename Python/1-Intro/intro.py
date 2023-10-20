# print()
# print("My name is Sathishkumar")
# print("SkillSafari")
# print("Coimbatore")

# variables
# used to store data
# Syntax
# varName = value => String, Integer, Float, Boolean
# string => group of alphabetical or alpha-numerical characters denoted inside double quotes
# Ex: "Hello"
# Ex: "abc123"
# Integer => number between 0 and 9
# Ex: 123, 789
# Float => numbers with decimal points
# Ex: 12.3, 56.4
# Boolean => True or False

# Clear the terminal => ctrl + L

# first_name = "John"
# last_name = "Jack"
# first_name = "Robert"
# age = 20
# print(first_name, last_name, age)

# input("string") => Used to get input from the user at the run time
# user_first_name = input("Enter firstname: ")
# user_last_name = input("Enter lastname: ")
# user_age = input("Enter age: ")
# print("------------------")
# print(user_first_name, user_last_name, user_age)

student_name = input("Enter Student name: ")
subject_one = input("Enter English mark: ")
subject_two = input("Enter Maths mark: ")
subject_three = input("Enter Physics mark: ")
subject_four = input("Enter Chemistry mark: ")
subject_five = input("Enter Computer mark: ")
print("---------------------------")
print("---- STUDENT MARKSHEET ----")
print("---------------------------")
print("Student Name: " + student_name) # "John"
print("English: " + subject_one)
print("Maths: " + subject_two)
print("Physics: " + subject_three)
print("Chemistry: " + subject_four)
print("Computer: " + subject_five)
print("---------------------------")
# int(), float(), str(), bool()
# 
total = int(subject_one) + int(subject_two) + int(subject_three) + int(subject_four) + int(subject_five)
print("Total: ", total)
print("---------------------------")