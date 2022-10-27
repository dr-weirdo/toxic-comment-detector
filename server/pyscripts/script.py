import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

packages = ['tensorflow', 'tensorflow-text']

# for package in packages:
#     if package not in sys.modules:
#         install(package)

import os
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text

print(text.__version__)
path = os.path.dirname(__file__)
print(path)

model = tf.keras.models.load_model(path+'/.model')
# model.summary()

print(repr(model))

print(model.summary())

# print(sys.argv[1])
print([1, 2, 3])
print(np.array([4, 5, 6]))