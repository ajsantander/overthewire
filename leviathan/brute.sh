#!/bin/bash

for a in {0..9}; 
do
  for b in {0..9}; 
  do
    for c in {0..9}; 
    do
      for d in {0..9}; 
      do
        # ./leviathan6 $a$b$c$d >> log
        echo $a$b$c$d >> log 
      done
    done 
  done 
done

