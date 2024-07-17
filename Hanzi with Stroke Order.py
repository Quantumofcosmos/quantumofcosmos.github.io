import streamlit as st
import pandas as pd

# Set page configuration to use the full width
st.set_page_config(layout="wide")

# Add custom CSS for styling
st.markdown("""
<style>
    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid black;
        table-layout: fixed; /* Ensure fixed layout */
    }
    th, td {
        padding: 8px;
        border: 1px solid black;
        box-sizing: border-box;
        text-align: center; /* Adjust text alignment as needed */
    }
</style>
""", unsafe_allow_html=True)

# Title of the app
st.title("Frequently used Hanzi with Stroke Order and Pagination")

# Number of rows per page
ROWS_PER_PAGE = 20

# Initialize session state
if 'page' not in st.session_state:
    st.session_state.page = 0

def next_page():
    st.session_state.page += 1

def prev_page():
    st.session_state.page -= 1

def goto_page(page_num):
    st.session_state.page = page_num

# Read the CSV file (example path, replace with your actual path)
df = pd.read_csv("hanziDB.csv")

# Ensure correct data types
for col in df.columns:
    df[col] = df[col].astype(str)

# Drop unwanted columns
columns_to_drop = ['radical', 'stroke_count', 'hsk_level', 'radical_code', 'general_standard_num']
df = df.drop(columns=columns_to_drop, errors='ignore')

# Filter options
st.subheader("Filter Data")
col1, col2 = st.columns([2, 1])

with col1:
    all_columns = df.columns.tolist()
    filter_column = st.selectbox("Select Column to Filter", all_columns)

with col2:     
    filter_value = st.text_input(f"Enter value to filter {filter_column}")

# Filter the dataframe
if filter_value:
    filtered_df = df[df[filter_column].str.contains(filter_value, na=False)]

else:
    filtered_df = df

# Paginate the dataframe
start_row = st.session_state.page * ROWS_PER_PAGE
end_row = start_row + ROWS_PER_PAGE
paginated_df = filtered_df.iloc[start_row:end_row].reset_index(drop=True)

# Generate custom HTML table with stroke order
html_table = """
<div style='overflow: auto;'>
<table>
    <thead>
        <tr>
            {header}
        </tr>
    </thead>
    <tbody>
        {rows}
    </tbody>
</table>
<script src="https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {{
        {hanzi_scripts}
    }});
</script>
</div>
"""

header_html = "".join([f"<th>{col}</th>" for col in paginated_df.columns] + ["<th>Stroke Order</th>"])
rows_html = ""
hanzi_scripts = ""

for index, row in paginated_df.iterrows():
    row_html = "".join([f"<td style='width: 250px;text-align:center'>{row[col]}</td>" for col in paginated_df.columns])
    stroke_order_div = f"<div id='character-target-{index}' style='width: 100px; height: 100px;'></div>"
    if pd.notnull(row['character']):
        hanzi_script = f"""
            var writer_{index} = HanziWriter.create('character-target-{index}', '{row['character']}', {{
                width: 100,
                height: 100,
                padding: 5,
                showOutline: true,
                showCharacter: false
            }});
            writer_{index}.loopCharacterAnimation();
        """
    else:
        hanzi_script = ""
    rows_html += f"<tr>{row_html}<td>{stroke_order_div}</td></tr>"
    hanzi_scripts += hanzi_script

html_table = html_table.format(header=header_html, rows=rows_html, hanzi_scripts=hanzi_scripts)

# Display paginated dataframe with stroke order
# st.subheader("Paginated DataFrame with Hanzi Stroke Order")
st.components.v1.html(html_table, height=2100)

# Compact pagination controls
col1, col2, col3 = st.columns([1, 2, 1])
if st.session_state.page > 0:
    col1.button("Previous", on_click=prev_page)
# Page navigation by entering page number
with col2:
    st.write(f"Current Page:  {st.session_state.page + 1}")

if end_row < len(filtered_df):
    col3.button("Next", on_click=next_page)
