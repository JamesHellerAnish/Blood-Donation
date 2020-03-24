# -*- coding: utf-8 -*-
"""
Created on Wed Mar 18 08:51:54 2020

@author: KUSH
"""



import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import matplotlib.pyplot as plt
import seaborn as sns
import sys

import os

df_train = pd.read_csv('blood-train.csv')


#data preprocessing
#renaming unnamed colunm
df_train.rename(columns={"Unnamed: 0":"Donor_id"},inplace=True)


# Training data
X_train = df_train.iloc[:,[1,2,3,4]].values
y_train = df_train.iloc[:,-1].values


#Feature Scaling
from sklearn.preprocessing import StandardScaler
Scaler = StandardScaler()
X_train = Scaler.fit_transform(X_train)



#applying random forest
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(random_state=0)
rf.fit(X_train,y_train)

#testing on a database received from blood bank
df_test = pd.read_csv('blood-test.csv')

#creating X_test out of the received database
# X_test = df_test.iloc[:,[1,2,3,4]].values
# print(X_test)
X_test = np.array([[0,0,0,0]])
X_test[0][0] = sys.argv[1]
X_test[0][1] = sys.argv[2]
X_test[0][2] = sys.argv[3]
X_test[0][3] = sys.argv[4]
# print(X_test)
#performing feature scaling on X_test
X_test = Scaler.fit_transform(X_test)

#making predictions on X_test
y_pred = rf.predict(X_test)
if(y_pred==1):
    print("The person can donated blood")
else:
    print("The person cannot donate blood")
# print(y_pred[0])

#making a csv file of y_pred
# df1 = pd.DataFrame(data=y_pred , columns=["target"])
# df1.to_csv('y_pred.csv')

#saving model to disk
# import pickle
# pickle.dump(rf , open('model1.pkl','wb'))

# #loading model to compare the results
# model1 = pickle.load(open('model1.pkl','rb'))