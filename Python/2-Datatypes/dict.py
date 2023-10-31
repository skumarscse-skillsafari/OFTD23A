# Creating dictionary
# dictionaryName = {
#    "key-1" : "value-1",
#    "key-2" : "value-2",
#            :
#            :
#    "key-N" : "value-N"
# }

userDetails = {
    "firstName": "John",
    "lastName": "Jack",
    "age": 23,
    "isAdmin": True,
    "address": {"city": "Chennai", "pincode": 600018, "state": "Tamilnadu"},
}
# print(userDetails)

# Accessing values / get()
# Square backet - []
# Syntax
# dictionaryName["key"]
# print(userDetails["lastName"])
# print(userDetails["address"])

# get()
# Syntax
# dictionaryName.get("key")
# print(userDetails.get("lastName"))
# print(userDetails.get("address"))

# Add or update / update()
# Syntax
# Add
# dictionaryName["newKey"] = value
# userDetails["designation"] = "Associate Software Engineer"
# print(userDetails)
# Update
# dictionaryName["existingKey"] = newValue
# userDetails["age"] = 28
# print(userDetails)

# delete
# Syntax
# del dictionaryName["key"]
# del userDetails["age"]
# print(userDetails)

# existance check
# Syntax
# "key" in dictionaryName
# print("age" in userDetails)
# print("middleName" in userDetails)

# keys()
# print(userDetails.keys())
# for key in userDetails.keys():
#     print(key)

# values()
# print(userDetails.values())
# for value in userDetails.values():
#     print(value)

# items()
# print(userDetails.items())

# iterate key, value
# for key, value in userDetails.items():
#     print(key, value)

# clear()
# userDetails.clear()
# print(userDetails)

# copy - dict
# cloneuserDetails = userDetails.copy()
# cloneuserDetails = dict(userDetails)
# print(cloneuserDetails)

# nested dictionary
