import bpy

ob = bpy.data.objects['farbe']

# Get material
mat = bpy.data.materials.get("yellow")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
bpy.context.scene.render.filepath = '//yellow'
bpy.ops.render.render(animation=True)

#--------------------------------------------
mat = bpy.data.materials.get("orange")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
#Render results
bpy.context.scene.render.filepath = '//orange'
bpy.ops.render.render(animation=True)
#--------------------------------------------

# Get material
mat = bpy.data.materials.get("blue")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
#Render results
bpy.context.scene.render.filepath = '//blue'
bpy.ops.render.render(animation=True)
#--------------------------------------------

# Get material
mat = bpy.data.materials.get("violett")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
    
#Render results
bpy.context.scene.render.filepath = '//violett'
bpy.ops.render.render(animation=True)
#--------------------------------------------

# Get material
mat = bpy.data.materials.get("rosa")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
#Render results
bpy.context.scene.render.filepath = '//rosa'
bpy.ops.render.render(animation=True)
#--------------------------------------------

# Get material
mat = bpy.data.materials.get("red")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
    
#Render results
bpy.context.scene.render.filepath = '//red'
bpy.ops.render.render(animation=True)
#--------------------------------------------

# Get material
mat = bpy.data.materials.get("green")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
    
#Render results
bpy.context.scene.render.filepath = '//green'
bpy.ops.render.render(animation=True)
#--------------------------------------------

# Get material
mat = bpy.data.materials.get("brown")

# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
    
    
#Render results
bpy.context.scene.render.filepath = '//brown'
bpy.ops.render.render(animation=True)
#--------------------------------------------
