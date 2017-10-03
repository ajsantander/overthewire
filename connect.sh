#!/bin/bash

game=$1
port=$2
level=$3

ssh $game$level@$game.labs.overthewire.org -p $port