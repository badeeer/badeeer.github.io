
# Ten Animals Image Classifier

This project is a comprehensive image classification system that can classify images of ten different animals. The Python script, available as a Jupyter notebook [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb), follows a structured workflow to build, train, and evaluate the image classifier.

## Project Workflow

The Python script operates as follows:

1. **Data Organization**: It begins by specifying input and output directories for the dataset. The dataset is organized into subdirectories for training, validation, and test sets. The script splits class folders into these sets based on a specified ratio. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#data-organization).

2. **Data Loading**: The script loads the dataset using TensorFlow's `image_dataset_from_directory`. The data is split into training, validation, and test datasets, with batch size and image size defined. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#convert-to-tensorflow-dataset).

3. **CNN Model Building**: A Convolutional Neural Network (CNN) model is defined for image classification. This model includes convolutional layers, max-pooling layers, and a dense output layer with softmax activation. The model is configured for training, specifying the loss function, optimizer, and metrics. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#build-the-model).

4. **Model Training**: The model is trained on the training dataset with early stopping and model checkpoint callbacks to monitor and save training progress. The training history is stored. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#configure-the-model-for-training).

5. **Feature Extraction**: The script leverages a pre-trained VGG16 model to extract features from the images. A new model for feature extraction and training is defined. This model includes a dense output layer with softmax activation. The model is configured for training, with the same early stopping and model checkpoint callbacks. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#leveraging-pretrained-model).

6. **Feature Model Training**: The new model is trained on the extracted features from the training and validation datasets. The training history is stored. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#leveraging-pretrained-model).

7. **Fine-Tuning**: The pre-trained VGG16 model is fine-tuned by allowing certain layers to be trainable while freezing others. The script configures and trains the fine-tuned model using the feature data from the training and validation datasets. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#finetune-the-model).

8. **Model Evaluation**: The script evaluates the performance of the fine-tuned model on the test dataset, providing the test accuracy. You can find the code for this part [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb#model-evaluation).

## Conclusion

This image classification project showcases a complete workflow for classifying images of ten different animals. It covers data organization, model building, training, feature extraction, fine-tuning, and model evaluation. The script utilizes TensorFlow and a pre-trained VGG16 model to achieve accurate classification results.

For a more detailed explanation and code implementation, please refer to the Jupyter notebook [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/ten-animals-classifier.ipynb) and the accompanying README [here](https://github.com/badeeer/Ten-animales-classifier-/blob/master/README.md).

