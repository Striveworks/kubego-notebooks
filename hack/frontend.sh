pushd frontend/kubeflow-common-lib
npm i
npm run build
cd dist/kubeflow
npm link
popd

pushd frontend/jupyter
npm i
npm link kubeflow
npm run copyLibAssets && ng build --base-href / --deploy-url /static/
popd

cp -r frontend/jupyter/dist/frontend/ static