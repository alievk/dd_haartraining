#!/bin/bash
perl bin/createsamples.pl positives.txt negatives.txt samples 1500\
  "opencv_createsamples -bgcolor 0 -bgthresh 0 -maxxangle 0\
    -maxyangle 0 maxzangle 3 -w 46 -h 46"
