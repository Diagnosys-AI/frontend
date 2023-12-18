# Colour Palette

This is the colour palette:

![Colour Palette](/img/palette.png)

```python
import matplotlib.pyplot as plt

# Creating a color palette that evokes trust, using color theory
palette = ["#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00"]  # A blend of blues and complementary warm tones
names = ["Deep Trust Blue", "Calm Cyan", "Gentle Aqua", "Warm Beige", "Inviting Amber"]

# Display the color palette
plt.figure(figsize=(10, 2))
for i, color in enumerate(palette):
    plt.fill_between([i, i+1], 0, 1, color=color)
    plt.text((i + 0.5), 0.5, names[i], ha='center', va='center', fontsize=12, color='white' if i != 3 else 'black')
plt.xticks([])
plt.yticks([])
plt.title("Diagnosys AI Color Palette for Trust")
plt.show()
```
