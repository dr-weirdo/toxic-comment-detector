import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

packages = ['tensorflow', 'tensorflow-text']
# print(sys.modules)

# for package in packages:
#     if package not in sys.modules:
#         install(package)

import os
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text

# print(text.__version__)
path = os.path.dirname(__file__)
# print(path)

model = tf.keras.models.load_model(path+'/.model')
list_classes = ["Toxic", "Severe Toxic", "Obscene", "Threat", "Insult", "Identity Hate"]
# model.summary()

# print(repr(model))

# print(model.summary())

res = []

def classify(input_text,model,classes):
    trained_mdl =  model.predict([input_text], verbose=0)
    output = np.where(trained_mdl > 0.5,1,0)
    for i,j in zip(classes,output[0]):
        if j == 1:
            res.append(i)
    print(", ".join(str(i) for i in res)) if len(res) > 0 else print("Non-toxic")
            

input = sys.argv[1]
classify(input, model, list_classes)
