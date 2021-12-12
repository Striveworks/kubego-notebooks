package main

import (
	"github.com/Striveworks/kubego-notebooks/config"
	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/server/router"
)

func main() {
	config.Init()
	err := adapters.CreateK8sClient(
		config.Config.InCluster,
	)
	if err != nil {
		panic(err)
	}
	err = adapters.CreateNotebookClient(
		config.Config.InCluster,
	)
	if err != nil {
		panic(err)
	}
	err = adapters.CreatePodDefaultClient(
		config.Config.InCluster,
	)
	if err != nil {
		panic(err)
	}
	r := router.CreateRouter()
	r.Run(config.Config.Server.Address)

}
