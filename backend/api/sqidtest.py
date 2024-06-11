from sqids import Sqids

sqids = Sqids(min_length=8)

id = sqids.encode([2])
print(id)