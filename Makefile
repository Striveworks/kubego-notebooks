.PHONY: install-pod-defaults
install-pod-defaults:
	./hack/install_pod_default.sh


.PHONY: install-notebook-controller
install-notebook-controller:
	./hack/install_controller.sh

.PHONY: install-notebooks
install-notebook:
	./hack/install_notebooks.sh

.PHONY: install-deps
install-deps: install-pod-defaults install-notebook-controller

.PHONY: install
install: install-deps install-notebooks

.PHONY: build-frontend
build-frontend: 
	./hack/frontend.sh

