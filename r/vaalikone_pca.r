inputFilePath="INPUT_FILE_PATH"
outputFilePath="OUTPUT_FILE_PATH"

#Read the data in
vaalikone <- read.csv(file=inputFilePath, head=TRUE, sep=",", encoding="UTF-8")
questions <- vaalikone[2:31]

#Perform PCA
vaalikone.pca <- prcomp(questions) 

#Define labels and colors for plot
parties = c("Kristillisdemokraatit",  "Keskusta",  "Kokoomus",	"Muutos 2011",	"Perussuomalaiset",	"SDP",	"SKP",	"Vasemmistoliitto",	"Vihreät",	"Piraattipuolue",	"RKP",	"Itsenäisyyspuolue")
colors = c(27, 81, 125, 638, 145, 35, 552, 91, 50, 550, 652, 503)

#Plot the first two principal components
par(mar=c(5, 5, 5, 11), xpd=TRUE)
plot(vaalikone.pca$x[,1],vaalikone.pca$x[,2], col=vaalikone$color)
legend(x=9,y=7,parties,cex=.8, colors)

#Combine first two principal components
firstPCs <- cbind(vaalikone.pca$x[,1],vaalikone.pca$x[,2])

#Write first two PCs to file
write.csv(firstPCs, file=outputFilePath)