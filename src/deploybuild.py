# this file is called deploybuild.py 
 
import os.path, os
from ftplib import FTP, error_perm
 
host = 'waws-prod-dm1-085.ftp.azurewebsites.windows.net'
port = 21
 
ftp = FTP()
ftp.connect(host,port)
ftp.login('rajdemo1\$rajdemo1','BlxxHAliY6gKtqeA0KATT8pmchkDEAjPr6ZMlDFyP9grSGPmXYNqh9cvxeHx')
 
ftp.cwd('/site/wwwroot') 
 
# set filenameCV to your full, absolute path to the "dist" folder 
# of the completed build on your local machine when you do
# an "ng build --prod"
 
filenameCV = "C:\\Users\\Rajesh\\Covid19\\dist" 
 
def placeFiles(ftp, path):
    for name in os.listdir(path):
        localpath = os.path.join(path, name)
        if os.path.isfile(localpath):
            print("STOR", name, localpath)
            ftp.storbinary('STOR ' + name, open(localpath,'rb'))
        elif os.path.isdir(localpath):
            print("MKD", name)
 
            try:
                ftp.mkd(name)
 
            # ignore "directory already exists"
            except error_perm as e:
                if not e.args[0].startswith('550'): 
                    raise
 
            print("CWD", name)
            ftp.cwd(name)
            placeFiles(ftp, localpath)           
            print("CWD", "..")
            ftp.cwd("..")
 
# first, do the build locally 
buildResult = os.system("ng build --prod")
 
# if there is an error, stop 
if (buildResult==1):
    print("ERROR IN BUILD. NOT DEPLOYING.")
    ftp.quit()
    exit 
 
placeFiles(ftp, filenameCV)
 
ftp.quit()