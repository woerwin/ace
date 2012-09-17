Call:
lm(formula = y ~ x)
 
Coefficients:
(Intercept)            x  
     -9.333        7.000 
 
> summary(lm_1)          # Compute and print statistics for the fit
                         # of the (linear model object) lm_1
 
Call:
lm(formula = y ~ x)
 
Residuals:
1       2       3       4       5       6
3.3333 -0.6667 -2.6667 -2.6667 -0.6667  3.3333
 
Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  -9.3333     2.8441  -3.282 0.030453 *
x             7.0000     0.7303   9.585 0.000662 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
 
Residual standard error: 3.055 on 4 degrees of freedom
Multiple R-squared: 0.9583,     Adjusted R-squared: 0.9478
F-statistic: 91.88 on 1 and 4 DF,  p-value: 0.000662
 
> par(mfrow=c(2, 2))     # Request 2x2 plot layout
> plot(lm_1)             # Diagnostic plot of regression model

library(caTools)         # external package providing write.gif function
jet.colors <- colorRampPalette(c("#00007F", "blue", "#007FFF", "cyan", "#7FFF7F", 
                                 "yellow", "#FF7F00", "red", "#7F0000")) 
m <- 1200                # define size
C <- complex( real=rep(seq(-1.8,0.6, length.out=m), each=m ), 
              imag=rep(seq(-1.2,1.2, length.out=m), m ) ) 
C <- matrix(C,m,m)       # reshape as square matrix of complex numbers
Z <- 0                   # initialize Z to zero
X <- array(0, c(m,m,20)) # initialize output 3D array
for (k in 1:20) {        # loop with 20 iterations
  Z <- Z^2+C             # the central difference equation  
  X[,,k] <- exp(-abs(Z)) # capture results
} 
write.gif(X, "Mandelbrot.gif", col=jet.colors, delay=100)