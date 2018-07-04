package com.b2wplatform.boot;

public final  class Utils {


    public static void randomSleep(long ms) {
        try {
            Thread.sleep((long)(Math.random() * ms));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
